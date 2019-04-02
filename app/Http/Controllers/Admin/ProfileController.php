<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Profile;
use App\User;
use Intervention\Image\ImageManagerStatic as Image;

class ProfileController extends Controller
{   
    public function index()
    {
        $user           = Auth::user();
        $user_id        = $user->id;
        $user_profile   = User::find($user_id)->profile;
        return view('admin/profile',compact('user','user_profile'));
    }

    
    public function profile_ajax(Request $request)
    {
        $this->validate($request,[
            'address'       => 'required | max:150',
            'city'          => 'required | max:20',
            'pin'           => 'required | digits:6 | numeric',
            'facebook'      => 'nullable | max:50',
            'twitter'       => 'nullable | max:50',
            'instagram'     => 'nullable | max:50',
            'linkedin'      => 'nullable | max:50',
            'googel'        => 'nullable | max:50',
            'whatsapp'      => 'nullable | numeric | digits_between:11,13',
            'whatsappGroup' => 'nullable | max:50',
            'website'       => 'nullable | max:50',
            'profession'    => 'nullable | max:50',
            'description'   => 'nullable | max:250'
        ]);
//         
        $user_id = Auth::user()->id;
        if(Profile::updateOrCreate(['user_id' => $user_id],$request->all()))
        {
            echo "Updated";
        }
        else{
            echo "Sorry. Something Went Wrong..!";
        }
    }

    public function profile_image(Request $request)
    {
        request()->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        $user_id = Auth::user()->id;
        $imageName = $user_id.'_'.time().'.'.request()->image->getClientOriginalExtension();
        $image       = $request->file('image');
        $image_resize = Image::make($image->getRealPath());              
        $image_resize->resize(400,null,function($constraint){
            $constraint->aspectRatio();
        });
        if($image_resize->save(public_path('uploaded/profile_image/' .$imageName)))
        {
            if(Profile::updateOrCreate(['user_id' => $user_id],['profile_image'=>$imageName]))
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
}
