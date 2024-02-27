document.querySelector('#rapper-name-btn').addEventListener('click', getRapperInfo)

async function getRapperInfo() {
    try {
        const rapper = document.querySelector("#rapper-name").value
        const res = await fetch(`127.0.0.1:8000/api/${rapper}`)
        const data = await res.json()

        document.querySelector('#stage-name').innerText = data.stageName
        document.querySelector('#age').innerText = data.stageName
        document.querySelector('birth-name').innerText = data.birthName
        document.querySelector('birth-location').innerText = data.birthLocation
    } catch(e) {
        console.log(`Error: Couldn't resolve data ${e}`)
    }
}