<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) 
        {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->string('username',50)->nullable()->unique();
            $table->string('address',150)->nullable();
            $table->string('city',20)->nullable();
            $table->mediumInteger('pin')->nullable();
            $table->string('facebook',50)->nullable()->unique();
            $table->string('twitter',50)->unique()->nullable();
            $table->string('instagram',50)->unique()->nullable();
            $table->string('linkedin',50)->unique()->nullable();
            $table->string('google',50)->unique()->nullable();
            $table->bigInteger('whatsapp')->unique()->nullable();
            $table->string('whatsappGroup',50)->nullable();
            $table->string('company',50)->nullable();
            $table->string('website',50)->unique()->nullable();
            $table->string('profession',50)->nullable();
            $table->string('description')->nullable();
            $table->tinyInteger('selected_theme')->nullable();
            $table->string('profile_image',50)->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles');
    }
}
