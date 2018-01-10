<?php

namespace SkyPress;

use \WAR\Api as WAR_Api;
use SkyPress\Modals as Modals;

class Config {

    public $config_options;

    public function __construct(){
        $this->config_options = [
            'api_prefix'            => 'api',
            'api_name'              => 'sky',
            'version'               => '1',
            'enable_cors'           => true,
            'default_model_params'  => [
                'id',
                'created_on',
                'updated_on'
            ]
        ];
    }

    public function api_init(){
        $sky_modals = new Models;

        $war_api = new War_Api;
        $war_api->add_config( $this->config_options );
        $war_api->add_models( $sky_modals->register() );

        $war_api->init();

    }

} // END Config class
