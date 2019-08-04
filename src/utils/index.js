export const isEditor = () => {
    if (typeof window !== 'undefined') {
        return window.location.pathname.split('/')[0].includes('admin')
    }
    else {
        return false
    }
}

export const isBrowser = () => typeof window !== 'undefined';

