import React, { Component } from 'react';
import { Provider as PaperProvider, Toolbar, ToolbarContent } from 'react-native-paper'
import PropTypes from 'prop-types'


const Header = ({ title }) => (
    <Toolbar>
        <ToolbarContent title={title} />
    </Toolbar>
);

Header.prototype = {
    title: PropTypes.string.isRequired
}

export default Header