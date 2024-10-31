<?php
/**
 * @package Rotating Clock
 */
/*
Plugin Name: Rotating Clock
Plugin URI: http://www.ferritech.com/designs/wordpress/plugins/rotatingclock
Description: Rotating Clock is a fun widget that spins relative to the local time! Using this widget as a clock over the boring traditional clock types, adds a lot of character and individuality to your website.
Version: 1.0
Author: Ferritech
Author URI: http://www.ferritech.com/designs/wordpress
License: GPLv2 or later
*/

/*
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

class rot_clock extends WP_Widget
{
	function __construct()
	{
		parent::__construct(false, $name=__('Rotating Clock'));
	}
	function widget($args, $instance)
	{
		wp_enqueue_style('rotatingclockcss');
		include "rotclock.php";
	}
}
add_action('widgets_init',function()
	{
		register_widget('rot_clock');
	}
);
add_action('wp_enqueue_scripts',function()
{
	wp_enqueue_style('rotatingclockcss', plugins_url('css/rotatingclock.css',__FILE__));
	
	wp_enqueue_script('jquery');
	wp_enqueue_script('rotatorjs', plugins_url('js/rotator.js',__FILE__));
	wp_enqueue_script('rotclockjs', plugins_url('js/clock.js',__FILE__));
});
?>