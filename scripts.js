/* ---------- File: app.js ---------- */
if(rectsOverlap(node, other)) return true;
}
return false;
}


// Try to nudge to nearest free position (basic BFS-like search grid)
function nudgeAway(node){
const r = map.getBoundingClientRect();
const step = 8;
const maxRadius = Math.max(r.width, r.height);
const startX = node.x; const startY = node.y;
for(let radius=step; radius<maxRadius; radius+=step){
for(let dx=-radius; dx<=radius; dx+=step){
for(let dy=-radius; dy<=radius; dy+=step){
node.x = startX + dx; node.y = startY + dy; clampToMap(node);
if(!overlapsAny(node)) { updateNodePosition(node); return true; }
}
}
}
node.x = startX; node.y = startY; updateNodePosition(node);
return false;
}


// Export JSON
exportJsonBtn.addEventListener('click', ()=>{
const data = placed.map(p=>({id:p.id,src:p.src,x:Math.round(p.x),y:Math.round(p.y),w:p.w,h:p.h}));
const blob = new Blob([JSON.stringify({map: 'assets/map.png', items: data}, null, 2)], {type:'application/json'});
const url = URL.createObjectURL(blob);
const a = document.createElement('a'); a.href=url; a.download='brawlmap.json'; a.click(); URL.revokeObjectURL(url);
});


// Import JSON
importFile.addEventListener('change', (ev)=>{
const f = ev.target.files[0]; if(!f) return;
const reader = new FileReader();
reader.onload = ()=>{
try{
const obj = JSON.parse(reader.result);
loadFromJSON(obj);
} catch(e){ alert('JSON inválido'); }
};
reader.readAsText(f);
});


function loadFromJSON(obj){
// clear
placed.slice().forEach(p=>removePlaced(p));
if(!obj.items) return;
obj.items.forEach(it=>{
const node = createPlaced(it.id, it.src);
node.x = it.x; node.y = it.y; clampToMap(node); updateNodePosition(node);
});
}


// Export PNG (html2canvas)
exportBtn.addEventListener('click', ()=>{
html2canvas(map, {allowTaint:true, useCORS:true}).then(canvas=>{
const url = canvas.toDataURL('image/png');
const a = document.createElement('a'); a.href = url; a.download = 'brawlmap.png'; a.click();
}).catch(err=>{ alert('Error exportando imagen: '+err.message); });
});


clearBtn.addEventListener('click', ()=>{ placed.slice().forEach(p=>removePlaced(p)); });


// Optional: keyboard delete selected - not implemented (could add selection state)


// Basic touch-friendly pointer handling is already supported via pointer events.


});
