{/* <div>
    <div id='child1'>
        <h1>
            This is child 1 h1
        </h1>
        <h2>
            This is child 1 h2
        </h2>
    </div>
    <div id='child2'>
        <h1>
            This is child 1 h1
        </h1>
        <h2>
            This is child 1 h2
        </h2>
    </div>
</div>
 */}




const parent = React.createElement('div', {}, [React.createElement('div', { id: 'child1' }, [React.createElement('h1', {}, 'This is child 1 h1'), React.createElement('h2', {}, 'This is child 1 h2')]), React.createElement('div', { id: 'child2' }, [React.createElement('h1', {}, 'This is child 2 h1'), React.createElement('h2', {}, 'This is child 2 h2')])]);

console.log(parent)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)