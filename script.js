document.addEventListener('DOMContentLoaded', function() {

    var overlay = document.getElementById('overlay');
    overlay.addEventListener('click', toggleoverlay);

    document.querySelectorAll('.gallerypic').forEach(item => {
        item.addEventListener('click', picclick)
    })

    function picclick(e){
        var name = e.originalTarget.attributes.src.value;
        var namelen = name.length;
        console.log(name);
        var newname = name.slice(0,namelen-4) + "L" + name.slice(namelen-4, namelen);
        console.log(newname);
        document.getElementById('fullscreenpic').attributes.src.value = newname;
        toggleoverlay();
    }

    function toggleoverlay(){
        if (overlay.style.display == "flex") {
            overlay.style.display="none";
        } else {
            overlay.style.display="flex";
        }
    }

});