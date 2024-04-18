/** 通用工具类 */

/** 过滤中文 */
export const filterChinese = (value) => {
    return value.replace(/[^\u4E00-\u9FA5]/g, '');
}

/** 过滤非数字字符 */
export const filterNumber = (value) => {
    return value.replace(/\D/g, '');
}
