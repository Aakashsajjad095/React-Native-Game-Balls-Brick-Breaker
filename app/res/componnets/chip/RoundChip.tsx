import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { sizePadding } from '../../../src/utils/sizeUtils'
import { darkTheme } from '../../globalStyles/Color'
import appTheme from '../../globalStyles/ThemeSizes'
import { Row } from '../../layouts'

const RoundChip = ({title,score,source, contentColor }) => {
    return (
        <View style={[styles.container, { borderColor: contentColor }]}>
            <Row>
                <Text style={styles.chipTitleStyle}>{title}</Text>
                <Text style={styles.chipPointStyle}>{score}</Text>
            </Row>

        </View>
    )
}

export default RoundChip

const styles = StyleSheet.create({
    container: {
        backgroundColor: darkTheme.backgroundPrimary,
        borderRadius: sizePadding(30),
        padding: sizePadding(5),
        paddingHorizontal: sizePadding(12),
        borderWidth: 1
    },
    chipTitleStyle: {
        color: darkTheme.secondaryText,
        ...appTheme.FONTS.bodyMedium1

    },
    chipPointStyle: {
        marginLeft: sizePadding(4),
        color: darkTheme.secondaryText,
        ...appTheme.FONTS.bodyMedium1
    }

})