<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Product;
use App\productCategory;
use App\productdetail;
use Intervention\Image\ImageManagerStatic as Image;
// use Input;

class WebsiteController extends Controller
{
    public function index()
    {
    	$user    			= Auth::user();
        $user_id 			= $user->id;
        $product_category 	= user::find($user_id)->productCategory;
        $products 			= user::find($user_id)->Product;
        // $products = user::with(['product','productcategory']);
        // dd($products);
        return view('admin/website',compact('user','product_category','products'));
    }

    public function product_category(Request $request)
    {
    	$this->validate($request,[
    		'p1' 		=> 'max:50',
    		'p2' 		=> 'max:50',
    		'p3' 		=> 'required | max:50',
    		'category' 	=> 'required | max:50'
    	]);

        $user_id = Auth::user()->id;

    	if(productCategory::create(array_merge($request->all(),['user_id'=>$user_id])))
    	{
    		echo "Category Created";
    	}
    	else{
    		echo "Sorry, Something Went Wrong..!";
    	}
    }

    public function upload_product(Request $request)
    {
    	$this->validate($request,[
    		'image' 				=> 'required | image | mimes:jpeg,png,jpg,gif,svg|max:2048',
    		'product_name' 			=> 'required | max:200',
    		'product_price' 		=> 'required | numeric | digits_between:1,7',
    		'product_category_id' 	=> 'required | max:5',
    	]);
    	$user_id = Auth::user()->id;
        $imageName = $user_id.'_'.time().'.'.request()->image->getClientOriginalExtension();
        $image       = $request->file('image');
        $image_resize = Image::make($image->getRealPath());
        if($image_resize->save(public_path('uploaded/product_image/'.$imageName)))
        {
        	$image_resize->resize(250,null,function($constraint){
        		$constraint->aspectRatio();
        	});
        	$image_resize->save(public_path('uploaded/product_image_250/'.$imageName));
            if(product::Create(array_merge($request->all(),['user_id' => $user_id],['product_image'=>$imageName])))
            {
            	echo "Updated";
            }
            else{
                echo "Sorry. Something Went Wrong..!";
            }
        }
        else{
            echo "Sorry. Something Went Wrong..!";
        }
    }

    public function update_product_detail()
    {

    }

    public function product()
    {
        $user               = Auth::user();
        $user_id            = $user->id;
        $product_id         = \Request::segment(3);
        // $products           = user::find($user_id)->Product;
        // $product_detail     = user::find($product_id)->productdetail;
        $products = product::where('id', '1')->first();
        // dd($products);


        // $id = Input::get('product','no');
        // $id = $request->input('product');
        // echo $id;
        return view('admin/product',compact('user','product_id','products'));
    }
}