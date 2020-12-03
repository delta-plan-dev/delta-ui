var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
var Label = styled.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  cursor: pointer;\n"], ["\n  display: inline-flex;\n  cursor: pointer;\n"])));
var Title = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  line-height: 24px;\n  margin-left: 5px;\n  color: ", ";\n"], ["\n  line-height: 24px;\n  margin-left: 5px;\n  color: ", ";\n"])), function (props) { return props.theme.colors.color2; });
var ButtonWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  width: 48px;\n  height: 24px;\n  border-radius: 12px;\n  background-color: ", ";\n  transition-duration: 0.2s;\n"], ["\n  display: inline-block;\n  width: 48px;\n  height: 24px;\n  border-radius: 12px;\n  background-color: ", ";\n  transition-duration: 0.2s;\n"])), function (props) { return props.theme.colors.color2; });
var Button = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 18px;\n  height: 18px;\n  margin: ", ";\n  border-radius: 50%;\n  background-color: ", ";\n  transition-duration: 0.2s;\n"], ["\n  width: 18px;\n  height: 18px;\n  margin: ", ";\n  border-radius: 50%;\n  background-color: ", ";\n  transition-duration: 0.2s;\n"])), function (props) { return (props.active ? "3px 3px 3px 26px" : "3px"); }, function (props) { return props.theme.colors.color1; });
var Switch = function (_a) {
    var title = _a.title, handleChange = _a.handleChange, value = _a.value, _b = _a.style, style = _b === void 0 ? {} : _b;
    return (React.createElement(Label, { style: style, onClick: function () {
            handleChange(!value);
        } },
        React.createElement(ButtonWrapper, { active: value },
            React.createElement(Button, { active: value })),
        React.createElement(Title, null, title)));
};
export default Switch;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=switch.js.map