export default function Home() {
  return (    
      <main className="flex flex-col items-center justify-between p-24">     
        <div className="flex">
          <a className="nes-btn" href="#">Normal</a>
          <button type="button" className="nes-btn is-primary">Primary</button>
          <button type="button" className="nes-btn is-success">Success</button>
          <button type="button" className="nes-btn is-warning">Warning</button>
          <button type="button" className="nes-btn is-error">Error</button>
          <button type="button" className="nes-btn is-disabled">Disabled</button>
          <label className="nes-btn">
            <span>Select your file</span>
          </label>
        </div>   
      </main>    
  );
}
