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
                "description": "Rigging and refining team-made assets.ssssss"
            },
            "Blog": {
                "content": `
                    <h1 class="centre-text">
                        Summary:
                    </h1>

                    <h1 class="centre-text">
                        Details:
                    </h1>
                    <h1 class="description">
                        Blog Title: Initiate
                    </h1>
                    <h1 class="description">
                        Blog Date: 20th of March, 2025
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
                        After trying many character controller methods, I created the one I like the most.
                    </h1>
                    <h1 class="description">
                        I used the CharacterController component, a built in Unity component. I configured the built in properties like slopes, step offset, and skin width to correlate with the scaling of my character model and the mansion.
                    </h1>
                    <h1 class="description">
                        I attached the "Player" script, which will handle the movement of the character.
                    </h1>
                    <h1 class="picture" id="picture1"></h1>
                    <h1 class="description">
                        I implemented head turning to the character by moving a sphere in the direction of the camera and making a bone in my character face it using Unity's animation rigging package.
                    </h1>
                    <h1 class="description">
                        I then 
                    </h1>
                    <h1 class="picture" id="picture2"></h1>
                    <h1 class="description">
                        Here is the main code snippet. My favourite part of this functionality is the way the speed lerps from normal to sprint and applies inputs in such a simple way.
                    </h1>
                    <h1 class="centre-text">
                        Problems
                    </h1>
                    <h1 class="description">
                        I had a lot of problems implementing the script. One included the is grounded detection, I overcame this by using raycasting to detect a masking layer like the terrain.
                    </h1>
                    <h1 class="description">
                        I also had a problem pairing up my movement with animation, I just had to fine tweak the numbers till it looked smooth.
                    </h1>
                    <h1 class="description">
                        Footsteps are hard to get right, after some trial and error, I got it to somewhat sound fine.
                    </h1>
                    
                    <h1 class="centre-text">
                        Camera Controller Method
                    </h1>
                    <h1 class="description">
                        I imporated the cinemachine package from the unity registry, and tweaked in such to match my character scaling and proportions.
                    </h1>
                    <h1 class="picture" id="picture3"></h1>
                    <h1 class="description">
                        I then tweaked little cinemachine properties like the field of view to make the camera feel better.
                    </h1>
                    <h1 class="centre-text">
                        Problems
                    </h1>
                    <h1 class="description">
                        Previously I attempted to make an orbital camera using sin/cos/tan and clamping with offsets, though due to Unity's physics engine the turning always causing stutterting, no matter how much you smooth it out or update the camera position.
                    </h1>
                    <h1 class="description">
                        The camera required the cursor to be locked and hidden so I added a seperate "Settings" script to handle that.
                    </h1>

                `
            }
        },
        "Initiate": {
            "Card": {
                "title": "Initiate",
                "description": "Initiating the github repository, the Itch.io page, and the Unity project."
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
                    <h1 class="picture" id="picture1"></h1>
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
                    <h1 class="picture" id="picture2"></h1>
                    <h1 class="description">
                        I created the Itch.io page for the game, so that we can upload the game to the website and share it with others. This is a very simple process, and it only took a few minutes to do.
                    </h1>

                     <h1 class="centre-text">
                        Creating the Unity project
                    </h1>
                    <h1 class="picture" id="picture3"></h1>
                    <div class="video" id="QekOtb16698"></div>
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

// --- Configuration ---
// Use an absolute path from the site root. Assumes 'assets' is in your main deployment folder (e.g., 'public').
const ASSET_BASE_PATH = '/assets/images';

// --- Helper Functions ---

/**
 * Sets the breadcrumb navigation text.
 * @param {string} diaryName - The name of the diary.
 * @param {string|null} blogName - The name of the blog, or null if on diary index.
 */
function setBreadcrumbs(diaryName, blogName = null) {
    const infoDiv = document.querySelector(".info");
    if (!infoDiv) {
        console.error("'.info' element not found!");
        return;
    }
    if (blogName) {
        infoDiv.innerHTML = `<h1>home > diaries > ${diaryName} > ${blogName}</h1>`;
    } else {
        infoDiv.innerHTML = `<h1>home > diaries > ${diaryName}</h1>`;
    }
}

/**
 * Dynamically embeds YouTube videos into elements with the `video` class.
 * The `id` of each `.video` element should be the YouTube video ID.
 * @param {HTMLElement} container - The container element where `.video` elements are located.
 */
function embedYouTubeVideos(container) {
    // **RECOMMENDATION:** Change your HTML in the 'blogs' object from
    // <h1 class="video" id="..."> to <div class="video" id="...">
    // H1 is for headings, DIV is for generic containers. It's semantically better.
    const videos = container.querySelectorAll(".video");

    videos.forEach(video => { // 'video' here is the container (h1 or div)
        const videoId = video.id;
        if (!videoId) {
            console.warn("Found a '.video' element without an ID. Skipping.");
            return;
        }

        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        console.log(`Embedding YouTube video for ID: ${videoId}, URL: ${embedUrl}`);

        const iframe = document.createElement("iframe");
        iframe.src = embedUrl;
        // Let CSS handle width/height via aspect-ratio on container + absolute positioning here
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;
        iframe.title = `YouTube video player: ${videoId}`; // Accessibility

        // --- Apply styles ONLY to the IFRAME ---
        // These make the iframe fill the container which is styled by your CSS
        iframe.style.position = 'absolute';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none'; // Explicitly remove border

        // --- REMOVE OR COMMENT OUT THESE LINES ---
        // These conflict with your CSS '.blog .video' rule which uses aspect-ratio
        // video.style.position = 'relative';      // Handled by CSS
        // video.style.paddingBottom = '56.25%';   // Handled by CSS aspect-ratio
        // video.style.height = '0';               // Handled by CSS aspect-ratio
        // video.style.overflow = 'hidden';        // Handled by CSS
        // --- END OF LINES TO REMOVE/COMMENT ---

        video.innerHTML = ""; // Clear placeholder (the original h1/div)
        video.appendChild(iframe); // Add the iframe
    });
}

/**
 * Renders the index page for a specific diary.
 * @param {string} diaryName - The name of the diary.
 * @param {object} diaryData - The data object for the diary from the 'blogs' structure.
 */
function renderDiaryIndex(diaryName, diaryData) {
    const topCardDiv = document.querySelector(".top-card");
    const blogsContainer = document.querySelector(".blogs");

    if (!topCardDiv || !blogsContainer) {
        console.error("Required elements '.top-card' or '.blogs' not found!");
        return;
    }

    setBreadcrumbs(diaryName);

    // Set top card info and background
    topCardDiv.innerHTML = `
        <h1>diary ~ ${diaryName}</h1>
        <h1>newest -> oldest</h1>`; // Consider sorting if needed later
    const thumbnailUrl = `${ASSET_BASE_PATH}/${diaryName}/thumbnail.jpg`;
    console.log("Setting diary top card background:", thumbnailUrl);
    topCardDiv.style.backgroundImage = `url('${thumbnailUrl}')`;

    // Clear previous blogs list (if any)
    blogsContainer.innerHTML = '';

    // Add each blog card
    Object.entries(diaryData).forEach(([blogKey, blog]) => { // Using blogKey for clarity
        if (!blog.Card) {
            console.warn(`Blog '${blogKey}' in diary '${diaryName}' is missing 'Card' data.`);
            return; // Skip this blog if card data is missing
        }
        const blogDiv = document.createElement("div");
        blogDiv.classList.add("blog"); // Use the singular class as in your HTML example

        blogDiv.innerHTML = `
            <h1 class="title">${blog.Card.title}</h1>
            <h1 class="description">${blog.Card.description}</h1>
        `;

        blogDiv.addEventListener("click", () => {
            // Assumes your HTML files are named like "DiaryName-BlogTitle.html"
            window.location.href = `${diaryName}-${blog.Card.title}.html`;
        });

        blogsContainer.appendChild(blogDiv);
    });
}

/**
 * Renders a specific blog post.
 * @param {string} diaryName - The name of the diary.
 * * @param {string} blogName - The name of the blog.
 * @param {object} blogData - The data object for the specific blog.
 */
function renderBlogPost(diaryName, blogName, blogData) {
    const topCardDiv = document.querySelector(".top-card");
    const blogContainer = document.querySelector(".blog"); // Assuming one main container for the single blog post view

    if (!topCardDiv || !blogContainer) {
        console.error("Required elements '.top-card' or '.blog' not found!");
        return;
    }
     if (!blogData.Blog || !blogData.Blog.content) {
         console.error(`Blog '${blogName}' in diary '${diaryName}' is missing 'Blog' data or 'content'.`);
         blogContainer.innerHTML = `<h1 class='error'>Blog content not found.</h1>`; // Display error
         return;
     }

    setBreadcrumbs(diaryName, blogName);

    // Set top card info and background
    topCardDiv.innerHTML = `
        <h1>diary ~ ${diaryName}</h1>
        <h1>blog ~ ${blogName}</h1>
        <h1>blog details last</h1>`; // Or adjust as needed
     const thumbnailUrl = `${ASSET_BASE_PATH}/${diaryName}/${blogName}/thumbnail.jpg`;
     console.log("Setting blog top card background:", thumbnailUrl);
     topCardDiv.style.backgroundImage = `url('${thumbnailUrl}')`;


    // Set blog content - This adds the .video div to the DOM
    blogContainer.innerHTML = blogData.Blog.content;

    // --- Process elements within the loaded content ---

    // Set background images for elements with class "picture"
    const pictures = blogContainer.querySelectorAll(".picture");
    pictures.forEach(picture => {
        const elementID = picture.id;
        if (!elementID) {
            console.warn("Found a '.picture' element without an ID inside the blog content.");
            return;
        }
        // Using absolute path
        const imageUrl = `${ASSET_BASE_PATH}/${diaryName}/${blogName}/${elementID}.png`;
        console.log(`Setting background for #${elementID}: ${imageUrl}`);
        picture.style.backgroundImage = `url('${imageUrl}')`;
        // Add error handling for background image loading itself
        picture.style.backgroundSize = 'cover'; // Example: ensure image covers the area
        picture.style.backgroundPosition = 'center'; // Example: center the image
    });

    // Add functionality for elements with class "link"
    const links = blogContainer.querySelectorAll(".link");
    links.forEach(link => {
        let content = link.textContent.trim();
        if (!content) return; // Skip empty links

        let urlString = content;
        if (!urlString.startsWith("http://") && !urlString.startsWith("https://")) {
            urlString = `https://${urlString}`;
        }

        try {
            const url = new URL(urlString);
            const domainPart = url.hostname.replace(/^www\./, ''); // Keep TLD for clarity e.g., github.com
            link.textContent = domainPart; // Display domain like 'github.com' or 'kr7zy.itch.io'
            link.style.cursor = 'pointer'; // Make it look clickable
            link.style.textDecoration = 'underline'; // Make it look clickable

            link.addEventListener("click", (event) => {
                event.preventDefault(); // Prevent default if it was somehow an <a> tag already
                window.open(urlString, "_blank", "noopener noreferrer"); // Open link safely
            });
        } catch (error) {
            console.error(`Invalid URL detected in .link element: ${content}`, error);
            link.textContent = `${content} (Invalid Link)`; // Indicate the link is broken
            link.style.color = 'red';
        }
    });

    // --- >>> ADD THIS LINE <<< ---
    // Now that content is set, find .video elements and embed iframes
    embedYouTubeVideos(blogContainer);
    // --- >>> END OF ADDED LINE <<< ---
}


// --- Main Execution Logic ---

document.addEventListener("DOMContentLoaded", () => {
    const title = document.title;
    const parts = title.split('-'); // Assuming format "DiaryName-BlogName" or just "DiaryName"

    const diaryName = parts[0]?.trim(); // Get first part, trim whitespace
    const blogName = parts[1]?.trim();  // Get second part if it exists, trim whitespace

    if (!diaryName) {
        console.error("Could not determine Diary Name from document title:", title);
        // Maybe display a generic error on the page
        const infoDiv = document.querySelector(".info");
        if (infoDiv) infoDiv.innerHTML = "<h1>Error: Could not determine page context</h1>";
        return;
    }

    console.log("Parsed Diary Name:", diaryName);
    console.log("Parsed Blog Name:", blogName); // Will be undefined if not present

    const diaryData = blogs[diaryName];

    if (!diaryData) {
         console.error(`Diary data not found for: ${diaryName}`);
         // Display error
         setBreadcrumbs(diaryName); // Show breadcrumbs up to diary level
         const blogsContainer = document.querySelector(".blogs") || document.querySelector(".blog");
         if (blogsContainer) blogsContainer.innerHTML = `<h1 class='error'>Diary '${diaryName}' not found.</h1>`;
         return;
    }

    if (blogName) {
        // We are on a specific blog page
        const blogData = diaryData[blogName];
        if (!blogData) {
             console.error(`Blog data not found for: ${blogName} in diary ${diaryName}`);
             // Display error
             setBreadcrumbs(diaryName, blogName);
             const blogContainer = document.querySelector(".blog");
             if (blogContainer) blogContainer.innerHTML = `<h1 class='error'>Blog '${blogName}' not found in diary '${diaryName}'.</h1>`;
             return;
        }
        renderBlogPost(diaryName, blogName, blogData);
    } else {
        // We are on the diary index page
        renderDiaryIndex(diaryName, diaryData);
    }
});