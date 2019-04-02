<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ProductCategory extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_Categories', function (Blueprint $table) 
        {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->string('p1',50)->nullable();
            $table->string('p2',50)->nullable();
            $table->string('p3',50);
            $table->string('category',50)->nullable();
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
        //
    }
}
