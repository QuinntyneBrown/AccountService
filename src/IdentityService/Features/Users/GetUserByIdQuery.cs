using MediatR;
using IdentityService.Data;
using IdentityService.Features.Core;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using System.Data.Entity;

namespace IdentityService.Features.Users
{
    public class GetUserByIdQuery
    {
        public class Request : IRequest<Response> { 
            public int Id { get; set; }
			public int? TenantId { get; set; }
        }

        public class Response
        {
            public UserApiModel User { get; set; } 
        }

        public class GetUserByIdHandler : IAsyncRequestHandler<Request, Response>
        {
            public GetUserByIdHandler(IdentityServiceContext context, ICache cache)
            {
                _context = context;
                _cache = cache;
            }

            public async Task<Response> Handle(Request request)
            {                
                return new Response()
                {
                    User = UserApiModel.FromUser(await _context.Users.SingleAsync(x=>x.Id == request.Id && x.TenantId == request.TenantId))
                };
            }

            private readonly IdentityServiceContext _context;
            private readonly ICache _cache;
        }

    }

}
