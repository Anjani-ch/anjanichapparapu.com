import { useContext } from 'react';

import { ThemeSetPrefferedContext } from '../contexts/ThemeContext';

function useThemeSetPreffered() {
    return useContext(ThemeSetPrefferedContext);
}

export default useThemeSetPreffered;