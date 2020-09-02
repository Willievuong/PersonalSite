build:
		$(info Building containers.)
		@docker-compose build
start:
		$(info Starting containers.)
		@docker-compose up
stop:
		$(info Stopping containers.)
		@docker-compose stop
kill:
		$(info Killing containers.)
		@docker-compose kill
restart:
		$(info Restarting containers.)
		@docker-compose restart
status:
		@docker-compose ps
prune:
		$(info Clearing unused images.)
		@docker system prune -af

python:
		@docker exec -it django bash
