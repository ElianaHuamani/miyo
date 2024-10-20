export const REGEX_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // NOSONAR
export const REGEX_SPECIAL_CHARACTERS = /^[^\\~!¡@#$^&{«»„““”‘’|\n\t…`^"'}®©]*$/;
export const REGEX_SPECIAL_CHARACTERS_CODE_NAME = /^[a-zA-Z0-9_-]*$/;
export const REGEX_UNSIGNED_NUMBER = /^\d+$/;
export const REGEX_SIGNED_NUMBER = /^-?\d+$/;
export const REGEX_UNSIGNED_DECIMAL = /^[0-9]\d{0,9}(,\d{1,6})?$/;
export const REGEX_SIGNED_ECIMAL = /^-?[0-9]\d{0,9}(,\d{1,6})?$/;
export const REGEX_DECIMALS = /^[0-6]$/;
export const REGEX_IP =
  /^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/;
export const REGEX_LATITUD = /^-?(([9][0])|(([1-8][0-9]|[0-9])(\.\d{1,10})?))$/;
export const REGEX_LONGITUD = /^-?(([1][8][0])|(([1][0-7][0-9]|[1-9][0-9]|[0-9])(\.\d{1,10})?))$/;
export const REGEX_PORT = /^([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/;
export const REGEX_PHONE_CHARACTERS = /^([ext0-9-.]\s?)*$/;
export const REGEX_ADDRESS_CHARACTERS = /^([a-zA-Z0-9_\-.,ºª()]\s?)*$/;
export const REGEX_URL_HTTP =
  /(((http|https):\/\/)|(\/)|(..\/))(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
export const REGEX_URL_RTSP =
  /(((rtsp|rtsps):\/\/)|(\/)|(..\/))(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
export const REGEX_NAME_CHARACTERS = /^([a-zA-Z0-9_\-.]\s?)*$/;
export const REGEX_DURATION = /^(\d+d)(\s)(\d+h)(\s)(\d+m)(\s)(\d+s)$/;
export const REGEX_VALID_CHARACTERS = /^[a-zA-Z0-9:._-\s]*$/;
export const REGEX_VALID_ONLY_NUMBERS = /^\d+$/;
export const REGEX_VALID_CIF = /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/;
export const REGEX_NAME_CHARACTERS_SIZE = /^([a-zA-Z0-9_\-.]\s?){1,10}$/;