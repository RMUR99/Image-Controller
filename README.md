# Image-Controller

#Manipulating Image Properties using JS 

<h2>Image with background color and Spanned Text changed </h2>
![image](https://github.com/RMUR99/Image-Controller/assets/85951306/e7d48db3-cbd7-4752-90f3-928f197161e7)

<h2>Image with Spacing + Blur Affect </h2>
![image](https://github.com/RMUR99/Image-Controller/assets/85951306/871d2d40-f363-4be5-9734-7738e4565638)

i have personally faced some issues and here is how to solve them :
1) Blur not working
   - ensure that your var will include filter: blur(var(--Blur)); make 2 brakets
   - make sure that you dont forget a semi colon
2) Default value is not to 0 and it is in the middle of the screen
    -Make sure that you dont forget to set a value = 0 , and min and max as well
3) The spanned text and background colors are not changeing
    - make sure when you write the class name that you dont have any spaces so the CSS can recongize it ( mind the case and spacing please )
    - name = "Base"(Correct)
    - name = "Base " ( Wrong )
PS: all of these issues were solved in the code this is just a reminder to be mindful of these types of things 
 
