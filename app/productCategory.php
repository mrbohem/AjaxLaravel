<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class productCategory extends Model
{
    protected $fillable = ['user_id','p1','p2','p3','category','created_at','updated_at'];

    public function user()
    {
    	return $this->belongsTo(User::class);
    }
}
