<?php

namespace Skypress;

class Models {

	public function register(){
		return $this->message_model();
	}

	private function message_model(){
		return [
			'messages' => [
				'name'   => 'messages',
				// 'access' => false,
				'access' => [
					'create' => false,
					'read'   => false,
					'update'   => 'create_users',
					'delete'   => 'create_users',
				],
				'params'  => [
					'name' => 'string',
					'email' => [ 'type' => 'email', 'required' => true ],
					'company' => 'string',
					'details' => [ 'type' => 'text', 'required' => true ],
					'tracked' => [
						'type' => 'bool',
						'hide' => true
					]
				]
			]
		];
	}
}
