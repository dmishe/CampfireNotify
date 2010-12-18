if (window == window.top)
{
    window.addEventListener("beforeunload", unload, true);
    
    if (!document.title.indexOf('Campfire: '))
    {
        safari.self.tab.dispatchMessage('were-in');
    }
    
    function unload()
    {
        safari.self.tab.dispatchMessage('were-out');
    }
}