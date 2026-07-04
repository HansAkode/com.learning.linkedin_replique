

const postCardTemplate = (post) => {
    return `
    <div class="poster">
        <div class="entete1">
            <h5>Suggested</h5>
            <div class="part1">
                <span class="material-icons">more_horiz</span>
                <span class="material-icons">close</span>
            </div>

        </div>
        <hr />
        <div class="creator">
            <div class="infocre">
                <div class="re7"></div>
                <div class="part2">
                    <h4>${post.name} • ${post.position}</h4>
                    <h5>${post.description}</h5>
                </div>

            </div>
            <div><h5 class="isfollower">+ Follow</h5>
            </div>
        </div>
        <p>
            ${post.content}
        </p>
        <div class="re8"></div>
        <div class="reaction">
            <div class="part3">
                <div class="ci4"></div>
                <h6>${post.likes}</h6>
            </div>
            <h6>${post.comments} comments - ${post.reposts} reposts </h6>
        </div>
        <hr />
        <div class="pied">
            <div class="el2">
                <span class="material-icons islove">thumb_up</span>
                <h6 class="isLoveTexte">Like</h6>
            </div>

            <div class="el2">
                <span class="material-icons">comment</span>
                <h6>Comment</h6>
            </div>

            <div class="el2">
                <span class="material-icons">repeat</span>
                <h6>Repost</h6>
            </div>

            <div class="el2">
                <span class="material-icons">send</span>
                <h6>Send</h6>
            </div>
        </div>

    </div>
    `
}
