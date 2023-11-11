# Image-Controller

#Manipulating Image Properties using JS 

<h2>Image with background color and Spanned Text changed </h2>
<h1 align="center">
  <br>
  <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/85951306/282193744-fdb043cb-0d65-4b93-a62f-c6ade558817e.png" alt="readme-image" width="800">
  <br>
</h1>




<h2>Image with Spacing + Blur Affect </h2>
<h1 align="center">
  <br>
  <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/85951306/282192746-871d2d40-f363-4be5-9734-7738e4565638.png" alt="readme-image" width="800">
  <br>
</h1>



i have personally faced some issues and here is how to solve them :
1) Blur not working
   - ensure that your var will include filter: blur(var(--Blur)); make 2 brakets
   - make sure that you dont forget a semicolon
2) Default value is not to 0 and it is in the middle of the screen
    -Make sure that you dont forget to set a value = 0
   
4) The spanned text and background colors are not changeing
    - make sure when you write the class name that you dont have any spaces so the CSS can recongize it ( mind the case and spacing please )
    - name = "Base"(Correct)
    - name = "Base " ( Wrong )
PS: all of these issues were solved in the code this is just a reminder to be mindful of these types of things 
 
