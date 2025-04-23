const blogs = {
    "Test": {
        "TestBlog": {
            "Card": {
                "title": "TestBlog",
                "description": "Just a test blog."
            },
            "Blog": {
                "content": `
                    <h1 class="centre-text">
                        Test Title
                    </h1>
                    <h1 class="description">
                        This is a test description.
                    </h1>
                `
            }
        }
    },
    "GameDevCS4043": {
        "Blender": {
            "Card": {
                "title": "Blender",
                "description": "Rigging and refining team-made assets."
            },
            "Blog": {

            }
        },
        "Blender": {
            "Card": {
                "title": "Blender",
                "description": "Putting furniture into the game."
            },
            "Blog": {
                "content": `
                    <h1 class="centre-text">
                        Links:
                    </h1>
                    <h1 class="description">
                        https://www.youtube.com/watch?v=6SQbJWIDOLk
                    </h1>
                    
                    <h1 class="centre-text">
                        Summary:
                    </h1>
                    <h1 class="description">
                        Making the furniture
                    </h1>

                    <h1 class="centre-text">
                        Summary:e
                    </h1>

                    <h1 class="centre-text">
                        Details:
                    </h1>
                    <h1 class="description">
                        Blog Title: Blender
                    </h1>
                    <h1 class="description">
                        Blog Date: 22nd of April, 2025
                    </h1>
                    <h1 class="description">
                        Blog Author: Robert Kenny
                    </h1>
                    <h1 class="description">
                        Blog Diary: GameDevCS4043
                    </h1>
                    <h1 class="description">
                        Project: CS4043 - Games Modelling Project
                    </h1>
                    <h1 class="description">
                        Project Professor: Gavin Wade
                    </h1>
                `
            }
        },
        "Physics": {
            "Card": {
                "title": "Physics",
                "description": "The application of physics with movement and camera control."
            },
            "Blog": {
                "content": `
                    <h1 class="centre-text">
                        Details:
                    </h1>
                    <h1 class="description">
                        Blog Title: Physics
                    </h1>
                    <h1 class="description">
                        Blog Date: 28th of Febuary, 2025
                    </h1>
                    <h1 class="description">
                        Blog Author: Robert Kenny
                    </h1>
                    <h1 class="description">
                        Blog Diary: GameDevCS4043
                    </h1>
                    <h1 class="description">
                        Project: CS4043 - Games Modelling Project
                    </h1>
                    <h1 class="description">
                        Project Professor: Gavin Wade
                    </h1>

                    <h1 class="centre-text">
                        Summary:
                    </h1>
                    <h1 class="description">
                        Character Controller Method
                    </h1>
                    <h1 class="description">
                        Camera Controller Method
                    </h1>

                    <h1 class="centre-text">
                        Character Controller Method
                    </h1>
                    <h1 class="description">
                        After trying MANY MANY MANY character controller methods, I stumbled upon the one I like the most.
                    </h1>
                    <h1 class="description">
                        I used the CharacterController component, which is a component that Unity provides to control the movement of a character. This component is very useful, and it makes it very easy to control the movement of a character.
                    </h1>
                    <h1 class="description">
                        I then added a script to the character, which is a C# script that controls the movement of the character.
                    </h1>
                    <h1 class="picture" id="Picture1"></h1>
                    <h1 class="description">
                        I made references to camera and a sphere instance. The sphere instance is just a little helper instance I used to place a few hundred units in the direction of the camera's look vector that the spine bone of my character faces. (This is not really a part of the character controller, but I thought it was worth mentioning.)
                    </h1>
                    <h1 class="description">
                        All the configurable variables are move speed and jump height, with turn speed and gravity. These can be tweaked depending on how scaled the character or world is.
                    </h1>
                    <h1 class="picture" id="Picture2"></h1>
                    <h1 class="description">
                        Here is the main code snippet. My favourite part of this functionality is the way the speed lerps from normal to sprint and applies inputs in such a simple way.
                    </h1>
                    
                    <h1 class="centre-text">
                        Camera Controller Method
                    </h1>
                    <h1 class="description">
                        Previously I coded my own orbital camera controller however, "cinemachine" is a package that Unity provides to control the camera. This package is very useful, and it makes it very easy to control the camera.
                    </h1>
                    <h1 class="picture" id="Picture3"></h1>
                    <h1 class="description">
                        The main thing I had to do was position and scale the boundaries of the free look camera.
                    </h1>
                `
            }
        },
        "Initiate": {
            "Card": {
                "title": "Initiate",
                "description": "Integrating Github with Unity and setting up the Itch.io paged."
            },
            "Blog": {
                "content": `
                    <h1 class="description">
                        Disclaimer 1 - I do not go through everything I did, I have done many more stuff
                        than the blog entries say like many mini scripts and assets.
                        Most of the blog entries are just a summary of what I did.
                        A lot of my work is dependent on other people's work, so I didn't get as much
                        done as I hoped.
                    </h1>
                    <h1 class="description">
                        Disclaimer 2 - I made this website for this blog, I love making websites, and
                        I love making aesthetically pleasing UI so I hope this looks good.
                    </h1>
                    <h1 class="centre-text">
                        Links:
                    </h1>
                     <h1 class="link">
                        https://github.com/KR7ZY/GameDevCS4043
                    </h1>
                    <h1 class="link">
                        https://kr7zy.itch.io/robs-servant
                    </h1>                    
                    <h1 class="centre-text">
                        Details:
                    </h1>
                    <h1 class="description">
                        Blog Title: Initiate
                    </h1>
                    <h1 class="description">
                        Blog Date: 9th of Febuary, 2025
                    </h1>
                    <h1 class="description">
                        Blog Author: Robert Kenny
                    </h1>
                    <h1 class="description">
                        Blog Diary: GameDevCS4043
                    </h1>
                    <h1 class="description">
                        Project: CS4043 - Games Modelling Project
                    </h1>
                    <h1 class="description">
                        Project Professor: Gavin Wade
                    </h1>

                    <h1 class="centre-text">
                        Summary:
                    </h1>
                    <h1 class="description">
                        Creating the Github repository
                    </h1>
                    <h1 class="description">
                        Creating the Itch.io page
                    </h1>
                    <h1 class="description">
                        Creating the Unity project
                    </h1>

                    <h1 class="centre-text">
                        Creating the Github repository
                    </h1>
                    <h1 class="picture" id="Picture1"></h1>
                    <h1 class="description">
                        I created the repository on the Github website and then cloned it to my computer using GitHub Desktop.
                    </h1>
                    <h1 class="description">
                        Then I added the collaborators to the repository, i.e., the members of the team. They're the programmers, since the sound composers can just send their files to the programmers and they can add them to the project.
                    </h1>
                    <h1 class="description">
                        I then added a .gitignore file to the repository, so that we don't upload any files that we don't want to upload. This includes the Library folder, which is a folder that Unity creates to store all of the assets and files that are used in the project. This folder can be very large, and it is not necessary to upload it to the repository.
                    </h1>
                    <h1 class="description">
                        I then added a README.md file to the repository, so that we can add any information that we want to add to the repository. This includes the name of the project, the members of the team, and any other information that we want to add.   
                    </h1>

                    <h1 class="centre-text">
                        Creating the Itch.io page
                    </h1>
                    <h1 class="picture" id="Picture2"></h1>
                    <h1 class="description">
                        I created the Itch.io page for the game, so that we can upload the game to the website and share it with others. This is a very simple process, and it only took a few minutes to do.
                    </h1>

                     <h1 class="centre-text">
                        Creating the Unity project
                    </h1>
                    <h1 class="picture" id="Picture3"></h1>
                    <h1 class="description">
                        I created the Unity project, so that we can start working on the game. This is also a simple process, and it only took a few minutes to do.
                    </h1>
                    <h1 class="description">
                        I then added the Unity project to the Github repository.
                    </h1>
                    `
            }
        }
    },
};

document.addEventListener("DOMContentLoaded", () => {
    let title = document.title;
    let parts = title.split('-');

    let diaryName = parts[0];
    let blogName = parts[1];

    console.log(diaryName);
    console.log(blogName);

    const blogsContainer = document.querySelector(".blogs");

    if (diaryName && !(blogName)) {
        const infoDiv = document.querySelector(".info");
        infoDiv.innerHTML = `<h1>home > diaries > ${diaryName}</h1>`;
    } else if (blogName) {
        const infoDiv = document.querySelector(".info");
        infoDiv.innerHTML = `<h1>home > diaries > ${diaryName} > ${blogName}</h1>`;
    }

    if (blogs[diaryName] && !(blogName)) {
        const topCardDiv = document.querySelector(".top-card");
        topCardDiv.innerHTML = `
                    <h1>diary ~ ${diaryName}<h1>
                    <h1>newest -> oldest</h1>`;
        topCardDiv.style.backgroundImage = `url('assets/images/${diaryName}/thumbnail.jpg')`;
        Object.entries(blogs[diaryName]).forEach(([key, blog]) => {
            const blogDiv = document.createElement("div");
            blogDiv.classList.add("blog");

            blogDiv.innerHTML = `
                <h1 class="title">${blog.Card.title}</h1>
                <h1 class="description">${blog.Card.description}</h1>
            `;

            blogDiv.addEventListener("click", () => {
                window.location.href = `${diaryName}-${blog.Card.title}.html`;
            });

            blogsContainer.appendChild(blogDiv);
        });
    } else if (blogName) {
        const topCardDiv = document.querySelector(".top-card");
        topCardDiv.innerHTML = `
                    <h1>diary ~ ${diaryName}<h1>
                    <h1>blog ~ ${blogName}<h1>
                    <h1>blog details last</h1>`;
        topCardDiv.style.backgroundImage = `url('assets/images/${diaryName}/${blogName}/thumbnail.jpg')`;
        const blog = blogs[diaryName][blogName];
        if (blog && blog.Blog) {
            const blogDiv = document.querySelector(".blog");
            blogDiv.innerHTML = blog.Blog.content;

            // Set background images for elements with class "picture"
            const pictures = blogDiv.querySelectorAll(".picture");
            pictures.forEach(picture => {
                const elementID = picture.id;
                console.log(elementID);
                picture.style.backgroundImage = `url('assets/images/${diaryName}/${blogName}/${elementID}.png')`;
            });

            // Add functionality for elements with class "link"
            const links = blogDiv.querySelectorAll(".link");
            links.forEach(link => {
                let content = link.textContent.trim();
                if (!content.startsWith("http://") && !content.startsWith("https://")) {
                    content = `https://${content}`;
                }
                const url = new URL(content);
                const domainPart = url.hostname.replace(/^www\./, '').replace(/\.\w+$/, ''); // Remove "www." and the top-level domain
                link.textContent = domainPart;
                link.addEventListener("click", () => {
                    window.open(content, "_blank"); // Open the link in a new tab
                });
            });
        }
    }
});