<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $fillable = ['user_id','address','city','pin','facebook','twitter','instagram','linkedin','google','whatsapp','whatsappGroup','website','profession','description','profile_image','created_at','updated_at'];

    public function user()
    {
    	return $this->belongsTo(User::class);
    }
}