// config 中支持直接设置的数据
const dataDictionary = ['padding', 'border', 'round', 'margin', 'xAxisOffset', 'yAxisOffset', 'level', 'horizontal', 'vertical', 'width', 'height', 'customOption', 'display']
// 生成的数据 需要排斥外部自己定义
const dataDictionaryNotNeed = ['content', 'type', 'child', 'id', 'computedData']
import { clearNoNum } from './utils/number/index'

// exif 信息对象
class EXIFINFO {
  constructor(id, type, parentNode, content, value) {
    this.level = 0; // 层级
    this.parentNode = parentNode; // 父元素
    if (parentNode.id) {
      this.root = false;
    } else {
      this.root = true;
    }

    // 位置信息
    this.display = 'block'; // 显示类型 支持flex和block布局

    // 水平位置
    // left（默认值）：左对齐
    // rigth：右对齐
    // center： 居中
    // space-between：两端对齐，项目之间的间隔都相等。（用于flex有用）
    // space-around：每个项目两侧的间隔相等。（用于flex有用）
    this.horizontal = 'left';

    // 垂直位置
    // top（默认值）：顶对齐
    // buttom：底对齐
    // center： 居中
    this.vertical = 'top';

    // 实际宽高
    this.width = 0;
    this.height = 0;
    // 内容宽高
    this.contentWidth = 0;
    this.contentHeight = 0;

    this.padding = '0';
    this.margin = '0';
    this.border = '0px solid #000' // 支持 dotted solid double dashed
    this.round = 0;

    // 计算属性
    this.computedData = {
      padding: {},
      margin: {},
      border: {},
    }

    this.customOption = {}; // 自定义信息

    // 实际位置x轴和y轴分布
    this.axisInfo = {
      x: 0,
      y: 0,
    }
    this.xAxisOffset = 0; // x偏移
    this.yAxisOffset = 0; // y偏移

    // 赋值默认信息
    for (const key in value) {
      if (Object.hasOwnProperty.call(value, key)) {
        const ObjValue = value[key];
        if (dataDictionary.indexOf(key) >= 0 && dataDictionaryNotNeed.indexOf(key) < 0) {
          this[key] = ObjValue
        } else if (dataDictionaryNotNeed.indexOf(key) < 0) {
          this.customOption[key] = ObjValue
        }
      }
    }
    this.id = id;
    this.content = content;
    this.type = type; // text block image
  }
  /**
   * 设置EXIFINFO的盒子模型信息后可以用这个方法来计算盒子模型信息的具体信息
   * After setting the box model information of exif info, this method can be used to calculate the specific information of the box model information
   * @params {String|Number|Array} boxModelData 传入计算的数值
   * @returns {Object} Returns the new object of padding.
   */
  getBoxModelFillGap(boxModelData = '0') {
    if (!boxModelData || boxModelData.length == 0) {
      throw "setting padding or margin data please!";
    }
    let gap = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    };
    try {
      let gapList = []
      if (typeof boxModelData == 'number') {
        gapList = [boxModelData]
      } else if (Array.isArray(boxModelData)) {
        gapList = boxModelData
      } else {
        gapList = boxModelData.split(" ");
      }
      if (gapList.length == 0) {
        throw "invalid padding or margin data!";
      }
      // 计算不同长度的 padding or margin的数据
      if (gapList.length == 1) {
        [gap.top, gap.right, gap.bottom, gap.left] = [gapList[0] * 1,
        gapList[0] * 1, gapList[0] * 1, gapList[0] * 1
        ];
      } else if (gapList.length == 2) {
        [gap.top, gap.right, gap.bottom, gap.left] = [gapList[0] * 1,
        gapList[1] * 1, gapList[0] * 1, gapList[1] * 1
        ];
      } else if (gapList.length == 3) {
        [gap.top, gap.right, gap.bottom, gap.left] = [gapList[0] * 1,
        gapList[1] * 1, gapList[2] * 1, gapList[1] * 1
        ];
      } else if (gapList.length >= 4) {
        [gap.top, gap.right, gap.bottom, gap.left] = [gapList[0] * 1,
        gapList[1] * 1, gapList[2] * 1, gapList[3] * 1
        ];
      }
    } catch (error) {
      throw error;
    }
    return gap;
  }
  // 获得border具体样式
  getBorder() {
    let borderList = this.border.split(' ');
    let width = 0;
    let widthList = []
    let style = 'solid'
    let styleList = ['dotted', 'solid', 'double', 'dashed']
    let color = '#000';
    for (let index = 0; index < borderList.length; index++) {
      const item = borderList[index];
      if (styleList.indexOf(item) >= 0) {
        // 设置 style
        style = item;
      } else if (item.indexOf('rgb') == 0 || item.indexOf('#') == 0) {
        // 设置 color
        color = item;
      } else if (/[0-9]/.test(item)) {
        // 含有数字 设置为width
        widthList.push(clearNoNum(item))
      }
    }
    width = this.getBoxModelFillGap(widthList)
    return {
      style,
      color,
      width
    }
  }
}
/**
 * The image EXIFINFO
 * 图片类型对象
 */
export class imgEXIFINFO extends EXIFINFO {
  constructor(id, value, parentNode) {
    super(id, "image", parentNode, value.content, value);
  }
  getSize(content = '', ctx, domcomentVue) {
    // 创建对象
    let img = new Image();
    // 改变图片的src
    img.src = content || this.content;
    let result = {
      width: 0,
      height: 0,
      contentWidth: 0,
      contentHeight: 0
    };
    let paddingInfo = this.getBoxModelFillGap(this.padding)
    let marginInfo = this.getBoxModelFillGap(this.margin)
    let boder = this.getBorder();
    // 填充计算属性
    this.computedData = {
      padding: paddingInfo,
      margin: marginInfo,
      border: boder,
    }
    result.width = img.width + paddingInfo.left + paddingInfo.right + marginInfo.left + marginInfo.right + boder.width.left + boder.width.right
    result.height = img.height + paddingInfo.top + paddingInfo.bottom + marginInfo.top + marginInfo.bottom + boder.width.top + boder.width.bottom;
    result.contentWidth = img.width
    result.contentHeight = img.height
    return result
  }
};

/**
 * The text EXIFINFO
 * 文字类型对象
 */
export class textEXIFINFO extends EXIFINFO {
  constructor(id, value, parentNode, LIST_fontInfo) {
    // super(id, value.content, parentNode, "text");
    super(id, "text", parentNode, value.content, value);
    this.font = {
      fontSize: 12,
      color: '#000000',
      style: null,
      fontFamily: "normal",
      bold: false,
      textAlign: 'left'
    };
    if (LIST_fontInfo) {
      const textDataDictionary = ['fontSize', 'color', 'style', 'fontFamily', 'bold', 'textAlign']
      for (const key in LIST_fontInfo) {
        if (Object.hasOwnProperty.call(LIST_fontInfo, key)) {
          const ObjValue = LIST_fontInfo[key];
          if (textDataDictionary.indexOf(key) >= 0) {
            this.font[key] = ObjValue
          } else {
            this.customOption[key].font = ObjValue
          }
        }
      }
    }
  }
  /**
   * 这个方法适用于获得在canvas中的文本规格。
   * This function is suitable for getting the text specification in canvas.
   * @params {String} text The text content
   * @params {Object} option The text style, Contains：Bold，fontSize，fontFamily
   * @returns {Object} Returns the new length of text width.
   */
  getSize(text, ctx, domcomentVue) {

    let bold = this.font.bold;
    let fontSize = this.font.fontSize || 12;
    let fontFamily = this.font.fontFamily || "normal";

    var result = {
      width: 0,
      height: 0,
      contentWidth: 0,
      contentHeight: 0
    };
    let width = 0;
    let height = 0;
    if (document) {
      var span = document.createElement("span");
      span.style.visibility = "hidden";
      span.style.display = "inline-block";
      span.style.fontSize = fontSize + 'px';//文字大小
      span.style.fontFamily = fontFamily;//字体

      document.body.appendChild(span);
      if (typeof span.textContent != "undefined") {
        span.textContent = text;
      } else {
        span.innerText = text;
      }
      width = window.getComputedStyle(span).width.replace(/[^\d.-]/g, '') * 1
      height = window.getComputedStyle(span).height.replace(/[^\d.-]/g, '') * 1
    } else {
      if (bold) {
        ctx.font = `bold ${fontSize}px ${fontFamily ? fontFamily : 'normal'}`;
      } else {
        ctx.font = `normal ${fontSize}px  ${fontFamily ? fontFamily : 'normal'}`;
      }
      width = ctx.measureText(text).width;
      height = fontSize * 7 / 5 // 默认是行高为7/5的fontsize
    }
    let paddingInfo = this.getBoxModelFillGap(this.padding)
    let marginInfo = this.getBoxModelFillGap(this.margin)
    //使用window.getComputedStyle方法获取
    let boder = this.getBorder();
    // 填充计算属性
    this.computedData = {
      padding: paddingInfo,
      margin: marginInfo,
      border: boder,
    }
    result.width = width + paddingInfo.left + paddingInfo.right + marginInfo.left + marginInfo.right + boder.width.left + boder.width.right
    result.height = height + paddingInfo.top + paddingInfo.bottom + marginInfo.top + marginInfo.bottom + boder.width.top + boder.width.bottom;
    result.contentWidth = width
    result.contentHeight = height
    return result;
  }
};

/**
 * The block EXIFINFO
 * 默认类型对象
 */
export class blockEXIFLIST extends EXIFINFO {
  constructor(id, value, parentNode) {
    // super(id, value.content, parentNode, "default");
    super(id, "block", parentNode, value.content, value);
    // setEXIFINFO(value)
    this.width = value.width || 'auto';
    this.height = value.height || 'auto';

  }
  /**
   * 计算元素宽高
   * @param {*} childList 获得元素子元素列表
   * @returns 
   */
  getSize(childList = [], ctx, domcomentVue) {
    let paddingInfo = this.getBoxModelFillGap(this.padding)
    let marginInfo = this.getBoxModelFillGap(this.margin)
    var result = {
      width: 'auto',
      height: 'auto',
      contentWidth: 'auto',
      contentHeight: 'auto',
    };
    let maxHeight = 0
    let maxWidth = 0
    if (this.width !== 'auto') {
      maxWidth = this.width
    }
    if (this.height !== 'auto') {
      maxHeight = this.height
    }
    if (this.width == 'auto' || this.height == 'auto') {
      if (this.display === 'flex') {
        // flex 布局 高度由子元素最高决定，宽度是所有子元素宽度累
        for (let index = 0; index < childList.length; index++) {
          const item = childList[index];
          // 打断
          if (maxHeight == 'auto' && maxWidth == 'auto') {
            break;
          }
          // 设置 width 宽度是所有子元素宽度累
          if (item.width == 'auto') {
            maxWidth = 'auto'
          } else if (maxWidth != 'auto' && this.width === 'auto') {
            maxWidth += item.width * 1
          }
          // 设置 heihgt 高度由子元素最高决定
          if (item.height > maxHeight && maxHeight != 'auto' && this.height === 'auto') {
            maxHeight = item.height * 1
          }
        }
      } else {
        // block 布局 宽度由子元素最高决定，高度是所有子元素宽度累加
        for (let index = 0; index < childList.length; index++) {
          const item = childList[index];
          // 打断
          if (maxHeight == 'auto' && maxWidth == 'auto') {
            break;
          }
          // 设置 height
          if (item.height == 'auto') {
            maxHeight = 'auto'
          } else if (maxHeight != 'auto' && this.width === 'auto') {
            maxHeight += item.height * 1
          }
          // 设置 width
          if (item.width > maxWidth && maxWidth != 'auto' && this.height === 'auto') {
            maxWidth = item.width * 1
          }
        }
      }
    }
    let boder = this.getBorder();
    // 填充计算属性
    this.computedData = {
      padding: paddingInfo,
      margin: marginInfo,
      border: boder,
    }
    // 设置内容高度
    result.width = (maxWidth === 'auto' || maxWidth === 0) ? this.width : maxWidth + paddingInfo.left + paddingInfo.right + marginInfo.left + marginInfo.right + boder.width.left + boder.width.right
    result.height = (maxHeight === 'auto' || maxHeight === 0) ? this.height : maxHeight + paddingInfo.top + paddingInfo.bottom + marginInfo.top + marginInfo.bottom + boder.width.top + boder.width.bottom;
    result.contentWidth = maxWidth
    result.contentHeight = maxHeight
    return result
  }
}
