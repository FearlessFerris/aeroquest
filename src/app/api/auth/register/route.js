// Register Route Implementation 


// Dependencies 
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { prisma } from '@/lib/prisma';


// Components & Necessary Files 


// Register Route
const isString = (v) => typeof v === 'string';
const hasNoSpaces = (s) => !/\s/.test(s);
const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
const isUsername = (s) => /^[a-zA-Z0-9_]+$/.test(s);


export async function POST(req){ 
    try{ 
        const body = await req.json(); 
        const usernameRaw = body?.username; 
        // const emailRaw = body?.email;
        const emailRaw = String(body.email ?? '').trim().toLowerCase();
        const passwordRaw = body?.password; 
        const confirmPasswordRaw = body?.confirmPassword; 
        // const imageUrl = null; 
        // const imageFile = null; 

        if(
            !isString(usernameRaw) ||
            !isString(emailRaw) ||
            !isString(passwordRaw) || 
            !isString(confirmPasswordRaw) 
        ){ 
            return NextResponse.json(
                {ok: false, error: 'Missing or invalid fields'}, 
                {status: 400},
            );
        }

        const username = usernameRaw.trim();
        const email = emailRaw.trim().toLowerCase(); 
        const password = passwordRaw;
        const confirmPassword = confirmPasswordRaw; 
        // const imageUrl = 
        //     isString(imageUrlRaw) && 
        //     hasNoSpaces(imageUrlRaw) && 
        //     imageUrlRaw.length > 0
        //     ? imageUrlRaw.trim()
        //     : null;
        
        if(username.length < 8 || username.length > 30 || !isUsername(username)){
            return NextResponse.json(
                {ok: false, error: 'Invalid Username (8-30 chars, letters/numbers/underscore only'}, 
                {status: 400}
            )
        }

        if(!isEmail(email)){
            return NextResponse.json(
                {ok: false, error: 'Invalid Email Address'},
                {status: 400}
            );
        }

        if(password.length < 8 || !hasNoSpaces(password)){ 
            return NextResponse.json(
                {ok: false, error: 'Invalid Password (8+ chars, no spaces)'},
                {status: 400}
            );
        }

        if(password !== confirmPassword){ 
            return NextResponse.json(
                {ok: false, error: 'Passwords do not match'},
                {status: 400}
            );
        }

        const [existingUsername, existingEmail] = await Promise.all([ 
            prisma.user.findUnique({
                where:{username},
                select:{
                    id: true,
                }
            }),
            prisma.user.findUnique({ 
                where:{email}, 
                select:{ 
                    id: true,
                }
            })
        ]);

        if(existingUsername){
            return NextResponse.json(
                {ok: false, error: 'Username already exists'},
                {status: 409}
            );
        }

        if(existingEmail){ 
            return NextResponse.json(
                {ok: false, error: 'Email already in use'},
                {status: 409}
            );
        }

        const passwordHash = await bcrypt.hash(password, 12);
        const user = await prisma.user.create({ 
            data:{ 
                username, 
                email, 
                passwordHash, 
                onboarded: false,
            },
            select: { 
                id: true, 
                username: true, 
                email: true, 
                onboarded: true, 
                createdAt: true,
            },
        });
        return NextResponse.json(
            {ok: true, user}, 
            {status: 201}
        );
    }
    catch(error){ 
        console.error('Register Error:', error);
        return NextResponse.json(
            {ok: false, error: 'Server error creating user'},
            {status: 500}
        );
    }
}