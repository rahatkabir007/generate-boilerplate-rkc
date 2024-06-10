class AppController {
    constructor(appService) {
        this.appService = appService;
    }

    registerRoutes(app) {
        app.get('/', (req, res) => {
            const result = this.appService.get(req)
            res.json(result)
        });
    }
}

export { AppController };
