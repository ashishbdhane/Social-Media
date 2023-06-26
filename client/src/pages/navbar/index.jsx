import {useState} from 'react';
import {
	Box,
	IconButton,
	InputBase,
	Typography,
	Select,
	MenuItem,
	FormControl,
	useTheme,
	useMediaQuery,
} from '@mui/material';

import {
	Search,
	Message,
	DarkMode,
	LightMode,
	Notifications,
	Help,
	Menu,
	Close,
} from '@mui/icons-material';

import {useDispatch, UseSelector} from 'react-redux';
import {setMode, setLogout} from '../../state';
import {useNavigate} from 'react-router-dom';
import FlexBetween from '../../components/FlexBetween';

const NavBar = () => {
	const [isMobileMenuToggled,setIsMobileMenuToggled] = useState(false);
};

export default NavBar;
