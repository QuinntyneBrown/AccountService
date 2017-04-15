using MediatR;
using AccountService.Data;
using AccountService.Data.Model;
using AccountService.Features.Core;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using System.Data.Entity;

namespace AccountService.Features.Tenants
{
    public class RemoveTenantCommand
    {
        public class RemoveTenantRequest : IRequest<RemoveTenantResponse>
        {
            public int Id { get; set; }
            public Guid TenantUniqueId { get; set; } 
        }

        public class RemoveTenantResponse { }

        public class RemoveTenantHandler : IAsyncRequestHandler<RemoveTenantRequest, RemoveTenantResponse>
        {
            public RemoveTenantHandler(AccountServiceContext context, ICache cache)
            {
                _context = context;
                _cache = cache;
            }

            public async Task<RemoveTenantResponse> Handle(RemoveTenantRequest request)
            {
                var tenant = await _context.Tenants.SingleAsync(x=>x.Id == request.Id);
                tenant.IsDeleted = true;
                await _context.SaveChangesAsync();
                return new RemoveTenantResponse();
            }

            private readonly AccountServiceContext _context;
            private readonly ICache _cache;
        }
    }
}