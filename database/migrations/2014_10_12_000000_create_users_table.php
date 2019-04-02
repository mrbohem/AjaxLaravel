<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id')->unique();
            // $table->string('username',50)->nullable()->unique();
            $table->string('fname',25);
            $table->string('lname',25);
            $table->string('email',50)->unique();
            $table->string('password',72);
            // $table->string('address')->nullable();
            // $table->string('city',20)->nullable();
            // $table->mediumInteger('pin')->nullable();
            $table->bigInteger('phone');
            // $table->string('facebook',50)->nullable()->unique();
            // $table->string('twitter',50)->unique()->nullable();
            // $table->string('instagram',50)->unique()->nullable();
            // $table->string('linkedin',50)->unique()->nullable();
            // $table->bigInteger('whatsapp')->unique()->nullable();
            // $table->string('whatsappGroup',50)->nullable();
            // $table->string('profession',50)->nullable();
            // $table->string('description')->nullable();
            // $table->tinyInteger('selected_theme')->nullable();
            $table->string('ip',100);
            $table->timestamp('last_login');
            // $table->timestamp('email_verified_at')->nullable();
            $table->timestamps();
            $table->rememberToken();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }

    
}
