function solve(w, h, W, H) {

    console.log((H * W) + (h * w) - (Math.min(w, W) * Math.min(h, H)));
}

solve(13, 2, 5, 8);