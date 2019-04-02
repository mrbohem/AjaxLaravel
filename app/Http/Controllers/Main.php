<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class Main extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return redirect()->route('login');
    }

    public function register()
    {
        return view('main/register');
    }

    public function login()
    {
        return view('main/login');
    }

    public function save(Request $request){
        $this->validate($request, [
            'fname'         => 'required',
            'lname'         => 'required',
            'email'         => 'required | email | unique:users,email',
            'phone'         => 'required | digits:10 | numeric | unique:users,phone',
            'password'      => 'required | min:7 | same:repassword',
            'repassword'    => 'required | min:7 | same:password',
        ],
        [
            'required' => 'Please Fill All Field',
            'same' => 'Password and Confirm Password does not match',
            'email.unique' => 'This email already regitered',
            'phone.unique' => 'This phone number already registered'
        ]);
        $password   = Hash::make($request->password);
        $ip         = request()->ip();
        $last_login = Carbon::now()->toDateTimeString();
        if(User::create(array_merge($request->all(),['ip'=>$ip,'last_login'=>$last_login,'password'=>$password])))
        {
            echo "You are registered Please wait for a while.";

            $user_data = array('email' => $request->get('email'),'password'=>$request->get('password'));
            if(AUTH::attempt($user_data))
            {
                $user = Auth::user();
                $request->session()->put('login_user_data', $user);
                // return redirect('profile');
            }
            else{
                echo "Sorry your email or password does not match..!";
            }
        }
        else{
            echo "Sorry something went wrong..!";
        }
    }

    public function update(Request $request)
    {
        $this->validate($request, [
            'email'         => 'required | email | exists:users,email',
            'password'      => 'required | min:7'
        ],
        [
            'required' => 'Please Fill All Field',
            'email.exists' => 'This email does not register',
            'password.min' => 'Wrong Password'
        ]);

        $user_data = array('email' => $request->get('email'),'password'=>$request->get('password'));
        if(AUTH::attempt($user_data))
        {
            // $user = Auth::user();
            // $request->session()->put('login_user_data', $user);
            return response()->json("ok");
        }
        else{
            // return response()->json("message":"The given data was invalid.","errors":{"password":["Wrong Password"]},403);
            return response()->json(array('message'=>'message','errors' => array('password'=>'Email and Password does not match')), 403);
        }
    }

    public function delete()
    {
        Auth::logout();
        return redirect()->to('login');
    }
    public function __construct()
    {

    }
}
