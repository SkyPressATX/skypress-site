<?php
/**
 * Plugin Name:     SkyPress API
 * Description:     API For the SkyPress Main Site
 * Author:          BMO
 * Version:         0.2.0
 */

 spl_autoload_register( 'sky_autoloader' );
 function sky_autoloader( $class ){
     $src_dir = __DIR__ . '/src/';
     $file_array = explode( '\\', $class );
     $file = end( $file_array ) . ".class.php";
     if( file_exists( $src_dir . $file ) ) require_once $src_dir . $file;
 }

 require_once __DIR__ . '/vendor/autoload.php';

 use SkyPress\Config as Config;

 add_action( 'plugins_loaded', [ new Config, 'api_init' ] );
