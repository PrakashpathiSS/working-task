import { useEffect, useState } from 'react';
import { Appearance} from 'react-native';


const getCurrentColorScheme = () => {
    return Appearance.getColorScheme();
};

const useDarkMode :any= () => {
    const [isDark, setIsDark] = useState<any>(getCurrentColorScheme() === 'dark');

    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setIsDark(colorScheme === 'dark');
        });
        return () => subscription.remove();
    }, []);

    return isDark;
};

export { useDarkMode };
