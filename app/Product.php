<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['user_id','product_category_id','product_name','product_price','product_image','created_at','updated_at'];

    public function user()
    {
    	return $this->belongsTo(User::class);
    }
    public function productcategory()
    {
    	return $this->belongsTo(ProductCategory::class);
    }

    public function ProductDetail()
    {
        return $this->hasMany(ProductDetail::class,'product_id','id');
    }
}
