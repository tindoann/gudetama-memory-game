function shuffle(array) {
  const _array = array.slice(0); 
  for (let i = 0; i < _array.length - 1; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1)); 
    let temp = _array[i]; // initial storage 0
    _array[i] = _array[randomIndex]; // swapping the new with the old random num
    _array[randomIndex] = temp; 
  }
  return _array; 
}

export default function initializeDeck() {
  let id = 0; 
  const cards = ['gut2', 'gut3', 'gut4', 'gut5', 'gut6', 'gut7', 'gut8', 'gut9', 'gut10', 'gut11', 'gut12', 
  'gut13', 'gut14', 'gut15', 'gut16'].reduce((acc, curr) => {
    acc.push({
      id: id++, 
      curr
    })
    acc.push({
      id: id++,
      curr
    })
    return acc
  }, [])
  return shuffle(cards); 
}