// @flow
import * as React from 'react';
import {useState} from 'react';
import {Box, MenuBoard, Personalcard, SidebarBottom, SidebarTop} from 'iconsax-react';
import {SidebarItem} from './SidebarItem';
import {Else, If, Then} from 'react-if';

export const Sidebar = () => {
	const [maximized, setMaximized] = useState(false);

	const handleClick = () => {
		setMaximized(prev => !prev);
	};

	return (
		<nav className='sidebar'>
			<div className='sidebar-header'>
				<h2>SamyOs</h2>
				<If condition={maximized}>
					<Then>
						<SidebarTop
							onClick={handleClick}
							size='32'
							color='#eceff4'
							variant='Outline'
						/>
					</Then>
					<Else>
						<SidebarBottom
							onClick={handleClick}
							size='32'
							color='#eceff4'
							variant='Outline'
						/>
					</Else>
				</If>

			</div>
			<div className={`sidebar-body ${!maximized && 'hidden'}`}>
				<SidebarItem active href='/' label='Projects' icon={<Box size='32' color='#eceff4'/>}/>
				<SidebarItem href='/about' label='About' icon={<Personalcard size='32' color='#eceff4'/>}/>
				<SidebarItem href='/blog' label='Blog' icon={<MenuBoard size='32' color='#eceff4'/>}/>
			</div>
		</nav>
	);
};
