import { useContext } from 'react';

import { ThemeSetLocalContext } from '../contexts/ThemeContext';

function useThemeSetLocal() {
    return useContext(ThemeSetLocalContext);
}

export default useThemeSetLocal;