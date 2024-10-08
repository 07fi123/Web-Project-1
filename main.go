// ⚡️ Fiber is an Express inspired web framework written in Go with ☕️
// 🤖 Github Repository: https://github.com/gofiber/fiber
// 📌 API Documentation: https://docs.gofiber.io

package main

import (
	"log"
	"time"

	"github.com/gofiber/fiber/v2"
)

func main() {
	// Fiber instance
	app := fiber.New()

	// Static file server
	app.Static("/", "./www", fiber.Static{
		Index:         "index.html",
		CacheDuration: 10 * time.Second,
		MaxAge:        3600,
	},
	)
	// => http://localhost:3000/hello.txt
	// => http://localhost:3000/gopher.gif

	// Start server
	log.Fatal(app.Listen(":3000"))
}
