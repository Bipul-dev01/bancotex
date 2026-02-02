// Selecting all required elements:

const gallery = document.querySelectorAll(".gallery .image");
//console.log(gallery);
const previewBox = document.querySelector(".preview-box");
const previewImg = previewBox.querySelector("img");
const closeBtn = previewBox.querySelector(".icon");

const currentImg = previewBox.querySelector(".current-img");
const totalImg = previewBox.querySelector(".total-img");

const shadow = document.querySelector(".shadow");

window.onload = () =>{
    for (let i = 0; i < gallery.length ; i++){

        totalImg.textContent = gallery.length ; //Passing gallery img length to totalImg

        let newIndex = i; //Passing i value to newIndex variable

        let clickImageIndex ;

        gallery[i].onclick = () =>{
            //console.log(i);
            clickImageIndex = newIndex ; // Passing clicked image index to clickImageIndex variable  

            function preview(){
                currentImg.textContent = newIndex + 1 // Passing newIndex value to currentImg variable by adding 1
                let selectedImageURL = gallery[newIndex].querySelector("img").src; //Getting user clicked image URL ;
                //console.log(selectedImageURL);

                previewImg.src = selectedImageURL; //Passing user clicked image URL to previewing source
            }

            // Let's work on prev & next button

            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");

            if(newIndex == 0){
                prevBtn.style.display = "none"; 
            }
            if(newIndex >= gallery.length - 1){
                nextBtn.style.display = "none";
            }

            prevBtn.onclick = () =>{
                newIndex-- ; //decrement newIndex value ;

                if(newIndex == 0){
                    preview();
                    prevBtn.style.display = "none"; 
                }else{
                    preview(); //Calling again above function to update image
                    prevBtn.style.display = "block";
                }    
            }

            nextBtn.onclick = () =>{
                newIndex++ ; //increment newIndex value ;

                if(newIndex >= gallery.length - 1){
                    preview();
                    nextBtn.style.display = "none"; 
                }else{
                    preview(); //Calling again above function to update image
                    prevBtn.style.display = "block";
                }    
            }

            preview(); //Calling above function 

            previewBox.classList.add("show");
            shadow.style.display = "block" ;
            document.querySelector("body").style.overflow = "hidden" ;

            closeBtn.onclick = () => {
                newIndex = clickImageIndex; // assigning user first click img index to newIndex variable
                prevBtn.style.display = "block";
                nextBtn.style.display = "block"; 
                previewBox.classList.remove("show");
                shadow.style.display = "none" ;
                document.body.style.overflow = "auto";

            }
        }
    }
}
