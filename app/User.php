<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['fname','lname','email','phone','password','ip','last_login'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function profile()
    {
        return $this->hasOne(Profile::class);
    }

    public function product()
    {
        return $this->hasMany(Product::class,'user_id','id');
    }

    public function productCategory()
    {
        return $this->hasMany(ProductCategory::class,'user_id','id');
    }

    public function ProductDetail()
    {
        return $this->hasMany(ProductDetail::class,'user_id','id');
    }
}
