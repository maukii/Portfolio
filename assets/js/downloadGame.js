function downloadGame(gameName) {
    const gameLinks = {
        Circulation: 'Resources/Builds/Circulation.zip',
    };

    const downloadLink = gameLinks[gameName];

    if (downloadLink) {
        const anchor = document.createElement('a');
        anchor.href = downloadLink;
        anchor.download = `${gameName}.zip`;
        anchor.click();
    } else {
        console.error('Game download link not found.');
    }
}