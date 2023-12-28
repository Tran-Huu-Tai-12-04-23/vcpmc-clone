class PathUrl {
    /// DOMAIN
    static URL_AUTH = 'auth';
    static URL_USER = 'user';
    static URL_MANAGER = 'manager';
    static URL_REVENUE = 'revenue';
    static URL_SUPPORT = 'support';
    static URL_PLAYLIST = 'playlist';
    static URL_SCHEDULE = 'schedule';
    static URL_SETTING = 'setting';
    static URL_STORE_RECORD = 'store';

    // subdomain
    static LOGIN = 'login';
    static VERIFY_EMAIL = 'verify-email';
    static LINK_ERROR = 'link-error';
    static RESET_PASSWORD = 'reset-password';

    ///----SUB DOMAIN
    static URL_LOGIN = 'login';
    static URL_REGISTER = 'register';
    ///----SUB DOMAIN
    static MANAGER_CONTRACT = 'contract';
    static MANAGER_DEVICES = 'device';
    static MANAGER_AUTHORITY = 'authority';
    static MANAGER_UNIT_USED = 'unit-used';
    ///----SUB DOMAIN
    static REVENUE_REPORT = 'report';
    static REVENUE_HISTORY_FOR_CONTROL = 'for-control';
    static REVENUE_DISTRIBUTION = 'distribution';
    ///----SUB DOMAIN
    static SETTING_USER_AUTHORIZATION = 'user-authorization';
    static SETTING_CONFIG = 'config';
    static SETTING_INFORMATION_CREATION = 'information-creation';
    static SETTING_CONTROL_CYCLE = 'control-cycle';
    // -- sub domain
    static SUPPORT_APP_GUIDE = 'app-guide';
    static SUPPORT_DOWNLOAD_APP = 'download-app';
    static SUPPORT_FEEDBACK = 'feed-back';
}

export default PathUrl;
