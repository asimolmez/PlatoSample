import React from "react";
import {View} from "react-native";
import  PropTypes from "prop-types";

export const Col = (props) => {

    console.log("props", props)
    const {
        size
    } = props;

    let sizeStyle;

    switch (size) {
        case 4:
            sizeStyle = styles.size4;
            break;
        default:
            sizeStyle = styles.size12;
            break;
    }

    const combinedStyle = {...styles.container, ...sizeStyle};

    console.log("combinedStyle", combinedStyle);

    return (
        <View style={combinedStyle}>
            {props.children}
        </View>  
    );
}

Col.defaultPropTypes = {
    size: 12
};

Col.propTypes = {
    size: PropTypes.number
}

const styles = {
    container: {
        backgroundColor: "#FF0000",
        borderWidth: 1,
        borderColor: "#000000"
    },
    size4: {
        flex: 4
    },
    size12: {
        flex: 12
    }
}

