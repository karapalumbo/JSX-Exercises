    function App() {
     return (
     <div>
        <Tweet name="Hal" username="Halbert" date={new Date().toDateString()} message="New Tweet!" />
        <Tweet name="Helga" username="Helga" date={new Date().toDateString()} message="Helga's tweet!" />
        <Tweet name="Hal" username="Halbert" date={new Date().toDateString()} message="Another one!" />
    </div>
    )
    }
    
