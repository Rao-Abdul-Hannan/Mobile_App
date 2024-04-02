import { LinearGradient } from 'expo-linear-gradient'
import MaskedView from '@react-native-masked-view/masked-view';
import { Text } from 'react-native';

export const GradientText = ({ colors, style, children }) => {
    return (
        <MaskedView maskElement={<Text style={style}>{children}</Text>}>
            <LinearGradient
                colors={colors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}>
                <Text style={[style, { opacity: 0 }]}>{children}</Text>
            </LinearGradient>
        </MaskedView>
    );
};