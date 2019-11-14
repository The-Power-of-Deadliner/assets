import * as React from 'react';
import styled from 'styled-components';

const GrabBikeIcon = require('grabbike-icon.png');

const GrabCarIcon = require('grabcar-icon.png');

const GrabDeliveryIcon = require('grabdelivery-icon.png');

const CalendarIcon = require('calendar-icon.png');

const ChecklistIcon = require('checklist-icon.png');

const ClockIcon = require('clock-icon.png');

const NormalKeyboard = require('normal-keyboard.png');

const NumericKeyboard = require('numeric-keyboard.png');

const PiggyBankIcon = require('piggy-bank-icon.png');

const PinPoint = require('pinpoint.png');

const RightArrowIcon = require('right-arrow-icon.png');

const ToggleOff = require('toggle-off.png');

const ToggleOn = require('toggle-on.png');

const TrendAnalytics = require('trend-analytics.png');


const Button = styled.button`
	background: ${props => props.primary ? "#00B14D" : "white"};
	color: ${props => props.primary ? "white" : "#BDBDBD"}; 
	border: ${props => props.secondary ? "1px solid #BDBDBD" : "none"};
	width: ${props => props.inputWidth || "24.8vh"};

	font-size: 2.76vh;
	padding: 0.25em 1em;
	border-radius: 5px;
`

const TertiaryButton = styled.button`
	background: none;
	border: none;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 20px;
	/* or 143% */
	display: flex;
	align-items: center;
	color: #00AFD3;
`

const CardContainer = styled.div`
	width: 56.2vh;
	background: #FFFFFF;
	box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05), 0px 0px 4px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	padding: 1em 1em;
	color: #333333;
`

const LineDivider = styled.div`
	left: 4%;
	right: 4%;
	width: 100%;
	border: 1px solid #E0E0E0;
`