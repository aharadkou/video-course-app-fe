
export const FRESHESS_DURATION = 14;

export const MINUTES_IN_HOUR = 60;

export const KEY_TOKEN = 'token';

export const KEY_USER_INFO = 'login';

export const MODAL_COURSE_DELETE = 'course-delete-modal';

export const SERVER_URL = 'http://localhost:3000';

export const COURSE_URL = `${SERVER_URL}/courses`;

export const AUTHENTICATION_URL = `${SERVER_URL}/auth`;

export const AUTHOR_URL = `${SERVER_URL}/authors`;

export const UNAUTHORIZED_STATUS = 401;

export const HEADER_TOKEN = 'x-access-token';

export const COURSE_LOAD_FROM = 0;

export const COURSE_PER_PAGE = 3;

export const COURSE_PAGE_ORDER = 'creationDate';

export const DEBOUNCE_SEARCH = 500;

export const SEARCH_SKIP_COUNT = 3;


export const COURSE_TITLE_MAX_LENGTH = 50;

export const COURSE_DESCRIPTION_MAX_LENGTH = 500;

export const COURSE_AUTHORS_MIN = 1;

export const DATE_SEPARATOR = '.';

export const PATTERN_DATE = new RegExp(`^(\\d?\\d)${DATE_SEPARATOR}(\\d?\\d)${DATE_SEPARATOR}(\\d{4})$`);


export const TAKE_FIRST = 1;

export const UNKNOWN_ERROR = 'Unknown error';

export const SUPPORTED_LANGS = [
  {
    lang: 'en',
    title: 'English'
  },
  {
    lang: 'ru',
    title: 'Русский'
  }
];
